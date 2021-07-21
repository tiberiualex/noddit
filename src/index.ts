import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from './entities/Post';
import { dbDetails } from "./config";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'test',
    port: 5433,
    user: dbDetails.user,
    password: dbDetails.password,
    debug: __prod__,
    type: 'postgresql'
  });

  const post = orm.em.create(Post, { title: 'My first post' });
  await orm.em.persistAndFlush(post);
}

main();
