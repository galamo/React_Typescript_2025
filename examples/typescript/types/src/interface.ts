interface MyRequest {
  id: string;
  httpMethod: string;
}

interface MyRequest2 extends MyRequest {
  logger: string;
}

const item: MyRequest2 = {
  id: "",
  httpMethod: "post",
  logger: "log",
};

// type MyReqType = {}

// type MyReqType = {}
