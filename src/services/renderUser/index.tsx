import getUserList from '../getUserList';
let offset = 10;
async function userOffset() {
  const userList = (await getUserList(offset)).data.users.nodes;
  offset += 10;
  return userList;
}

export default userOffset;
