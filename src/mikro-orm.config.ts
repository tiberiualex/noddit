import { Post } from "./entities/Post";
import { dbDetails } from "./config";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";

export default {
  entities: [Post],
  dbName: 'test',
  port: 5433,
  user: dbDetails.user,
  password: dbDetails.password,
  debug: __prod__,
  type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];
