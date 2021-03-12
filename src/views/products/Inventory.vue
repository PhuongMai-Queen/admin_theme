<template>
  <CCard>
    <CCardHeader>
      <CRow class="d-flex justify-content-between">
        <h4 class="m-2"><strong>Tồn kho</strong></h4>
      </CRow>
    </CCardHeader>
    <CCardBody>
      <template #checkbox="{item, index}">
        <td class="py-2">
          <input type="checkbox" :value="index" class="form-control"/>
        </td>
      </template>
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
        <template #update="{item, index}">
          <td class="d-flex justify-content-between">
              <input type="number" class="form-control" :value="item.inventory">
              <template v-for="(color, key) in ['success']">
                <router-link to="/products/create_products">
                  <CButton :color="color">Lưu</CButton>
                </router-link>
              </template>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>
<script>
const items = [
  { sku: 1374, name: 'KUN Sô cô la lúa mạch hộp 180ml thùng 48 hộp', categories: 'Sô cô la lúa mạch', inventory: 200},
  { sku: 1371, name: 'KUN Sô cô la lúa mạch hộp 110ml thùng 48 hộp', categories: 'Sô cô la lúa mạch', inventory: 190},
  { sku: 1378, name: 'LIF sữa bắp hộp 180ml thùng 24 hộp', categories: 'Sữa bắp', inventory: 150},
  { sku: 1377, name: 'KUN Sữa chua uống kem dâu 180ml - thùng 48 hộp', categories: 'Sữa chua uống', inventory: 220},
]

const fields = [
  { key: 'name', label: 'Sản phẩm'},
  { key: 'sku', label: 'Sku/Barcode'},
  { key: 'inventory', label: 'Tồn'},
  { key: 'update', label: 'Cập nhật tồn kho'}
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