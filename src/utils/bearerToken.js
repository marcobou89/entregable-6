const token=localStorage.getItem('token')
const bearerToken = () => {
  return (
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
  )
}

export default bearerToken