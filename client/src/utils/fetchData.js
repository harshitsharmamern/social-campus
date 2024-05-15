import axios from 'axios';

export const getDataAPI = async (url,token) => {
    const res = await axios.get(`/api/${url}`,{
        headers: { Authorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};
//http://localhost:8080/api/user
export const patchDataAPI = async (url, post, token) => {  //url- user  post-{ ...userData, avatar: avatar ? media[0].url : auth.user.avatar }
  const res = await axios.patch(`/api/${url}`, post, {
    headers: { Authorization: token },
  });
  console.log({res});
  return res;
};


export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};