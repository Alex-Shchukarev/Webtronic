<template>
  <AppCard 
    title="Тиккеты пользователя"
    footer="Вся информация является вымышленной, любые совпадения случайны"
  > 
    <div class="container-tickets" :style="{ height: heightCardBody }">
      <div class="filters-table">
        <div class="filter-item">
          <span>Автор заявки</span>
          <el-input v-model="author" />
        </div>
        <div class="filter-item">
          <span>Заголовок\№ заявки</span>
          <el-input v-model="title" />
        </div>
      </div>

      <el-table
        :data="tableData"
        border
        stripe
        highlight-current-row
        :height="heightTable"
        emptyText="Заявок с такими данными не найдено"
        @cellDblclick="toProfile"
      > 
        <el-table-column
          v-for="(column, index) in columns"
          :key="index"
          :columnKey="column.name"
          :sortable="column.sortable"
          :label="column.label"
          :prop="column.prop"
          :width="column.width"
          :showOverflowTooltip="column.showContent"
        />
        <el-table-column :width="120">
          <template #default="scope">
            <el-button size="small" @click="openTicket(scope.$index, scope.row)">
              Открыть
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </AppCard>

  <AppModal 
    v-if="visible"
    :title="`Заявка № ${titleModal}`"
    @close="visible=false"
  >
    <ul class="ticket-list">
      <li 
        v-for="(item, idx) in columns"
        :key="idx"
        class="list-item"
      >
        <div class="item-label">{{ item.label }}</div>
        <div>{{ ticketDate[item.name] }}</div>
      </li>
    </ul>
  </AppModal>
</template>

<script>
import AppCard from '../components/AppCard'
import AppModal from '../components/AppModal'
import { useTickets } from '../use/tickets'
import { defineHeightCardBody, defineHeightTable } from '../utils/HeightUtil'
import { cardHeightView } from '../constants'

export default {
  setup() {
    return { ...defineHeightCardBody(cardHeightView.tickets.label), ...defineHeightTable(), ...useTickets() }
  },
  components: { AppCard, AppModal }
}
</script>

<style scoped>
.filters-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 10px;
}
.filter-item {
  display: flex;
  align-items: center;
}
.filter-item span {
  width: 200px;
  margin-right: 20px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}
.ticket-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-item {
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.item-label {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: darkgray;
}
</style>