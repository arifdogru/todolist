/* eslint-disable no-undef-init */
/* eslint-disable no-trailing-spaces */
/* eslint-disable camelcase */
/* eslint-disable indent */
import {Router} from "express";
import {
    prepare_error_message,
    prepare_response_message,
    prepare_response_message_for_list,
    no_valid_entry_info
  } from "../../common/utils";
  import {
    save,
    update,
    remove,
    find_by_id,
    find_all,
    find_by_status
  } from "./task_controller";
  
  /**
   * @author Arif Dogru
   */
  
  export default ({
    config,
    db
  }) => {
    let router = Router();
    // v1/tasks
    router.post("/", async (req, res) => {
      try {
        const result = await save(req.body);
        const response = prepare_response_message("Task saved succesfully", result, {
          decription: "GET_TASK_BY_ID",
          type: "GET",
          url: `${req.protocol}://${req.get("host")}${req.originalUrl}/${result._id}`
        });
        res.status(201).json(response);
      } catch (error) {
        let errorMessage = error.errmsg;
        /*if (errorMessage.includes("duplicate key error collection: todolist.task index: email_1 dup key")) {
          prepare_error_message(email + " already exist", res);
        } else {*/
          prepare_error_message("Technical Error ", res);
        //}
      }
    });
  
    // v1/task
    router.patch("/", async (req, res) => {
      try {
        const result = await update(req.body);
        const response = prepare_response_message(
          "Task updated succesfully",
          result, {
            decription: "GET_TASK_BY_ID",
            type: "GET",
            url: `${req.protocol}://${req.get("host")}${req.originalUrl}/${req.body._id}`
          }
        );
        res.status(201).json(response);
      } catch (error) { // duplicate key error collection: provision.users index: email_1 dup key
        let errorMessage = error.errmsg;
        /*if (errorMessage.includes("duplicate key error collection: provision.users index: email_1 dup key")) {
          prepare_error_message(email + " already exist", res);
        } else {*/
          prepare_error_message("Technical Error ", res);
        //}
      }
    });
  
    router.delete("/", async (req, res) => {
      try {
        const result = await remove(req.body._id);
        const response = prepare_response_message(
          "Task deleted succesfully",
          result,
          null
        );
        res.status(201).json(response);
      } catch (error) {
        prepare_error_message(error, res);
      }
    });
  
    router.get("/:taskId", async (req, res, next) => {
      try {
        const result = await find_by_id(req.params.taskId);
        if (result) {
          const response = prepare_response_message(
            `${result.name} information is.. `,
            result, {
              decription: "GET_ALL_TASKS",
              type: "GET",
              url: `${req.protocol}://${req.get("host")}${req.baseUrl}/`
            }
          );
          res.status(200).json(response);
        } else {
          no_valid_entry_info(res);
        }
      } catch (error) {
        prepare_error_message(error, res);
      }
    });
  
    router.get("/", async (req, res, next) => {
      console.log("find all");
      try {
        const results = await find_all(req.body);
        if (results) {
          const response = prepare_response_message_for_list("", results);
          res.status(200).json(response);

        } else {
          no_valid_entry_info(res);
        }
      } catch (error) {
        // console.log(error);
        prepare_error_message(error, res);
      }
    });
  
  
    // /v1/task/st/status
    router.get("/st/:status", async (req, res, next) => {
      try {
        const result = await find_by_status(req.params.status);
        if (result) {
          const response = prepare_response_message_for_list("", result);
          res.status(200).json(response);

        } else {
          no_valid_entry_info(res);
        }
      } catch (error) {
        prepare_error_message(error, res);
      }
    });
    return router;
  };
