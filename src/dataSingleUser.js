function singleUser(userObj) {
  const user = [
    {
      header: "Street",
      value: userObj.address === undefined ? null : userObj.address.street,
    },
    {
      header: "Suite",
      value: userObj.address === undefined ? null : userObj.address.suite,
    },
    {
      header: "Zipcode",
      value: userObj.address === undefined ? null : userObj.address.zipcode,
    },
    {
      header: "Phone",
      value: userObj.phone,
    },
    {
      header: "Company name",
      value: userObj.company === undefined ? null : userObj.company.name,
    },
  ];
  return user;
}

export { singleUser };
