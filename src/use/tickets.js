import { ticketsData, columns } from '../constants'
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

export function useTickets() {
  const router = useRouter()
    const author = ref('')
    const title = ref('')
    const visible = ref(false)
    const titleModal = ref('')
    let ticketDate = reactive({})
    const tableData = computed(() => ticketsData.filter(ticket => {
      if (author.value.trim()) {                              
        return ticket.author.toLowerCase().includes(author.value.trim().toLowerCase())    
      } return ticket
    })
      .filter(ticket => {
        if (title.value.trim()) {
          return ticket.title.toLowerCase().includes(title.value.trim().toLowerCase())
        } return ticket
      })
    )
    
    const openTicket = (_, row) => {
      columns.forEach(c => {
        ticketDate[c.name] = row[c.name]
      })
      titleModal.value = row.title
      visible.value = true
    }

    const toProfile = (row, column) => {
      if (column.property === 'author') {
        if (row.author === 'Иванов ИИ') { 
          router.push('/profile') 
        }
      }
    }

    return { openTicket, author, title, columns, tableData, visible, ticketDate, titleModal, toProfile }
}