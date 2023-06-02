// TYPE-DEC:
export enum logTypeEnums {
  "" = "",
  INFO = "INFO",
  LOOK = "LOOK",
  TABLE = "TABLE",
  REQ = "REQ",
  RES = "RES",
  ERR = "ERR",
  OTHER = "OTHER",
}

// TYPE-DEC:
type loggerParamsTypes = {
  logType?: logTypeEnums | undefined;
  msg: any;
};

const logger = ({ logType, msg }: loggerParamsTypes) => {
  if (logType === logTypeEnums.INFO) {
    console.log(
      "%cINFO",
      "background: #007bff; color: white; padding: 2px 6px; border-radius: 4px;",
      msg
    );
  } else if (logType === logTypeEnums.LOOK) {
    console.log(
      "%cLOOK",
      "background: #2ecc71; color: white; padding: 2px 6px; border-radius: 4px;",
      msg
    );
  } else if (logType === logTypeEnums.TABLE) {
    console.log(
      "%cTABLE",
      "background: #3F51B5; color: white; padding: 2px 6px; border-radius: 4px;",
      msg
    );
  } else if (logType === logTypeEnums.REQ) {
    console.log(
      "%cREQ",
      "background: #3F51B5; color: white; padding: 2px 6px; border-radius: 4px;",
      msg
    );
  } else if (logType === logTypeEnums.RES) {
    console.log(
      "%cRES",
      "background: #006400; color: white; padding: 2px 6px; border-radius: 4px;",
      msg
    );
  } else if (logType === logTypeEnums.ERR) {
    console.log(
      "%cRES",
      "background: #d33436; color: white; padding: 2px 6px; border-radius: 4px;",
      msg
    );
  } else {
    console.log(
      "%cOTHER",
      "background: #404040; color: white; padding: 2px 6px; border-radius: 4px;",
      msg
    );
  }
};

export default logger;
