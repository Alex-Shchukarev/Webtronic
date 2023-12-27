import { useStore } from 'vuex'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

export function useLoginForm() {

  const store = useStore()
  const router = useRouter()
  const email = ref('')
  const password = ref('')

  const loginUser = async () => {
      if (!email.value && !password.value) {
        ElMessage({ message: 'Введите эл.почту и пароль', type: 'error' })
      } else if (!password.value) {
        ElMessage({ message: 'Введите пароль', type: 'error' })
      } else if (!email.value) {
        ElMessage({ message: 'Введите эл.почту', type: 'error' })
      } else {
        const user = {
          email: email.value,
          password: password.value
        }
        try {
          await store.dispatch('auth/loginUser', user)
          router.push('/')
        } catch (e) {
          ElMessage({ message: e.message, type: 'error' })
        }
      }
    }

  return { email, password, loginUser }
}