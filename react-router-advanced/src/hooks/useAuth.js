
const useAuth = () => {
    const user = localStorage.getItem("user"); // Simulating authentication
    return user ? { loggedIn: true } : { loggedIn: false };
  };
  
  export default useAuth;
  