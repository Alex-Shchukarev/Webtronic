<template>
  <AppCard 
    title="Информация о пользователе"
    footer="Вся информация является вымышленной, любые совпадения c реальными людьми случайны"
  >
    <ul class="profile-list" :style="{ height: heightCardBody }">
      <li class="list-item">
        <div class="item-label">
          <span>Фамилия</span>
        </div>
        <el-input :value="user.lastName" disabled />
      </li>
      <li class="list-item">
        <div class="item-label">
          <span>Имя</span>
        </div>
        <el-input :value="user.firstName" disabled />
      </li>
      <li class="list-item">
        <div class="item-label">
          <span>Отчество</span>
        </div>
        <el-input :value="user.middleName" disabled />
      </li>
      <li class="list-item">
        <div class="item-label">
          <span>Пол</span>
        </div>
        <el-input :value="user.gender" disabled />
      </li>
      <li class="list-item">
        <div class="item-label">
          <span>Дата рождения</span>
        </div>
        <el-date-picker
          v-model="user.birthday"
          type="date"
          @change="changeUser"
        />
      </li>
      <li class="list-item">
        <div class="item-label">
          <span>Город</span>
        </div>
        <el-select 
          v-model="user.city"
          class="m-2"
          @change="changeUser"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </li>
    </ul>
  </AppCard>
</template>

<script>
import AppCard from '../components/AppCard'
import { useProfile } from '../use/profile'
import { defineHeightCardBody } from '../utils/HeightUtil'

export default {
  setup() {
    return { ...defineHeightCardBody(), ...useProfile() }
  },
  components: { AppCard }
}
</script>

<style scoped>
.profile-list {
  margin: 0;
  padding: 0;
  list-style: none;
  padding-bottom: 10px;
}
.list-item {
  padding: 20px 20px 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.item-label {
  margin-right: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
</style>