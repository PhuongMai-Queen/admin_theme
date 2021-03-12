<template>
  <CCard>
    <CCardHeader>
      <CRow class="d-flex justify-content-between">
        <h4 class="m-2"><strong>Danh sách nhóm sản phẩm</strong></h4>
        <template v-for="(color, key) in ['success']">
          <router-link to="/products/product_groups/create_product_groups">
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
      </CDataTable>
    </CCardBody>
  </CCard>
</template>
<script>
const items = [
  { id: 1, name: 'Sản phẩm nổi bật', condition: '--'},
  { id: 2, name: 'Sản phẩm khuyến mãi', condition: '--'},
]

const fields = [
  { key: 'name', label: 'Tên nhóm'},
  { key: 'condition', label: 'Điều kiện'}
]

export default {
  name: 'AdvancedTables',
  data () {
    return {
      items: items.map((item, id) => { return {...item, id}}),
      fields,
      details: [],
      collapseDuration: 0
    }
  }
}
</script>