/* eslint-disable camelcase */
/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-console */
import mongoose from "mongoose";
import Task from "./task";
/**
 * @author Arif Dogru
 */
export const save = async parameters => {
  try {
    console.log(" Parameters ", parameters);

    const newTask = new Task({
      name: parameters.name,
      description: parameters.description,
      status: parameters.status
    });
    const result = await newTask.save();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const update = async parameters => {
  try {
    const id = parameters._id;
    console.log("******************* Update Task Parameters ", parameters);

    const updateOperations = {};
    for (const [key, value] of Object.entries(parameters)) {
        updateOperations[key] = value;
        console.log("Key ", key, " value: ", value);
    }

    const result = await Task.update({
      _id: id
    }, {
      $set: updateOperations
    }).exec();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const remove = async deleted_id => {
  try {
    const result = Task.remove({
      _id: deleted_id
    }).exec();
    return result;
  } catch (error) {
    throw error;
  }
};

export const find_by_id = async id => {
  try {
    const task = await Task.findOne({
      _id: id
    }).select("_id name description status createdAt updatedAt").exec();
    return task;
  } catch (error) {
    throw error;
  }
};

export const find_all = async (parameters) => {
  try {
    const results = await Task.find()
      .select("_id name description status createdAt updatedAt").exec();

    console.log("****************************** Result -> ", results);

    return results;
  } catch (error) {
    throw error;
  }
};

export const find_for_pager = async (parameters, limit, skip) => {
  try {
    const results = await Task.find()
      .select("_id name description status createdAt updatedAt")
      .limit(parseInt(limit))
      .skip(parseInt(skip))
      .exec();

    let count = await Task.countDocuments({
      task: parameters.logged_org_id
    });
    return {
      tasks: results,
      count
    };
  } catch (error) {
    throw error;
  }
};

export const find_by_status = async status => {
  try {
    const result = await Task.find({
      status: status
    })
      .where("status")
      .equals(status)
      .select("_id name description status createdAt updatedAt").exec();
    return result;
  } catch (error) {
    throw error;
  }
};