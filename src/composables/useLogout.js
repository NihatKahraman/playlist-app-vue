import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);
const isPending = ref(false)

const logout = async () => {
    error.value = null;
    isPending.value = true;
    try {
        await projectAuth.signOut()
        isPending.value = false;
    } catch (error) {
        console.log(error.message)
        error.value = err.message;
        isPending.value = false;
    }
}

const useLogout = () => {
    return{logout,error,isPending};
};

export default useLogout;