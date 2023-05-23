export const ParseArrayMongoDocument = (data: any[]) =>
  data.map((doc: any) => {
    const temp = doc.toObject();
    temp._id = temp._id.toString();
    temp.createdAt = temp.createdAt.toString();
    temp.updatedAt = temp.updatedAt.toString();
    temp.userId._id = temp.userId._id.toString();
    return temp;
  });

export const ParseSingleMongoDocument = (data: any) => {
  const temp = data.toObject();
  temp._id = temp._id.toString();
  temp.createdAt = temp.createdAt.toString();
  temp.updatedAt = temp.updatedAt.toString();
  return temp;
};
