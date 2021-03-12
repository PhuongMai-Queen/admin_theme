<template>
  <CCard>
    <CCardHeader>
      <CRow class="d-flex justify-content-between">
        <h3 class="m-2"><strong>Tất cả sản phẩm</strong></h3>
        <template v-for="(color, key) in ['success']">
          <router-link to="/products/create_products">
            <CButton
                :color="color"
                class="m-2"
            >
              + Thêm mới
            </CButton>
          </router-link>
      </template>
      </CRow>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :items="items"
        :fields="fields"
        column-filter
        table-filter
        items-per-page-select
        :items-per-page="5"
        hover
        sorter
        pagination
    >
      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
              color="primary"
              variant="outline"
              square
              size="sm"
              @click="toggleDetails(item, index)"
          >

            {{Boolean(item._toggled) ? 'Ẩn' : 'Hiện'}}
          </CButton>
        </td>
      </template>
      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <CCardBody>
            <div class="d-flex">
              <img :src="item.thumbnail" style="height: 102px">
              <div class="mt-3 ml-3">
                <h5 class="text-muted">Đơn giá: {{item.price_formatted}}</h5>
                <CButton size="sm" color="info" class="">Sửa</CButton>
                <CButton size="sm" color="danger" class="ml-1">Xóa</CButton>
              </div>
            </div>
          </CCardBody>
        </CCollapse>
      </template>
    </CDataTable>
    </CCardBody>
  </CCard>
</template>
<script>
import axios from "axios";
export default {
  data () {
    return {
      items: [],
      fields: [
        {
          key: "name",
          label: "Sản phẩm"
        },
        {
          key: "categories",
          label: "Loại"
        },
        {
          key: "publish_status",
          label: "Nhà sản xuất"
        },
        {
          key: 'show_details',
          label: '',
          _style: 'width:1%',
          sorter: false,
          filter: false
        }
      ],
      details: [],
      collapseDuration: 0
    }
  },
  methods: {
    toggleDetails (item, index) {
      this.$set(this.items[index], '_toggled', !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => { this.collapseDuration = 0});
    }
  },
  mounted () {
    axios
      .get('http://api.tvtp.vn/v0/products',{
        headers: {
          Authorization: 'Bearer cb68e963404f0b1b62229f37cf77013b7f97729b6722ae7d17e8315e9eabcbe3'
        }
      })
      .then(response => (this.items  = response.data.data))
    }
}
</script>