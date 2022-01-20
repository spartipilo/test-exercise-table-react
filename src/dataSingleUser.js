function singleUser(userObj) {
  const user = [
    // {
    //   header: "Name",
    //   value: userObj.name,
    // },
    // {
    //   header: "Username",
    //   value: userObj.username,
    // },
    // {
    //   header: "Email",
    //   value: userObj.email,
    // },
    {
      header: "Street",
      value: userObj.address === undefined ? null : userObj.address.street,
    },
    {
      header: "Suite",
      value: userObj.address === undefined ? null : userObj.address.suite,
    },
    // {
    //   header: "City",
    //   value: userObj.address === undefined ? null : userObj.address.city,
    // },
    {
      header: "Zipcode",
      value: userObj.address === undefined ? null : userObj.address.zipcode,
    },
    {
      header: "Phone",
      value: userObj.phone,
    },
    // {
    //   header: "Website",
    //   value: userObj.website,
    // },
    {
      header: "Company name",
      value: userObj.company === undefined ? null : userObj.company.name,
    },
  ];
  return user;
}

export { singleUser };
