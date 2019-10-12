export const prepare_response_message = (message, result, request_obj) => {
    return {
      message: message,
      result: result,
      request: request_obj
    };
  };
  
  export const prepare_response_message_for_list = (message, results, count) => {
    return {
      message: message,
      result: results,
      count
    };
  };
  
  export const no_valid_entry_info = res => {
    res.status(500).json({
      message: "No valid entry found for requested ID."
    });
    console.log({
      message: "No valid entry found for requested ID."
    });
  };
  
  export const prepare_error_message = (err, res) => {
    res.status(500).json({
      error: err
    });
  };