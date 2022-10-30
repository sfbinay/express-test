import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    mongoose.connect(dbUri);
    logger.info("Db connected"); //eslint-disable-line
  } catch (error) {
    logger.error("Could not connect the db"); //eslint-disable-line
    process.exit(1);
  }
}

export default connect;
