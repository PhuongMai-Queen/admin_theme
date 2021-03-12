<template>
  <CCard>
    <CCardBody>
      <CDataTable
        :items="CustomerData"
        :fields="fields"
        column-filter
        table-filter
        items-per-page-select
        :items-per-page="5"
        hover
        sorter
        pagination
      >
        <template #show_details="{ item, index }">
          <td class="py-2">
            <CButton
              color="primary"
              variant="outline"
              square
              size="sm"
              @click="toggleDetails(item, index)"
            >
              {{ Boolean(item._toggled) ? "Ẩn" : "Hiện" }}
            </CButton>
          </td>
        </template>
        <template #details="{ item }">
          <CCollapse
            :show="Boolean(item._toggled)"
            :duration="collapseDuration"
          >
            <CCardBody>
              <h4>{{ item.last_name }} {{ item.first_name }}</h4>
              <p>
                Số điện thoại: {{ item.phone_number }}
                <br />
                Giới tính: {{ item.gender }}
                <br />
                Ngày sinh: {{ item.date_of_birth }}
              </p>
              <CButton size="sm" color="info" class=""> Sửa </CButton>
              <CButton size="sm" color="danger" class="ml-1"> Xóa </CButton>
            </CCardBody>
          </CCollapse>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
import CustomerData from "./CustomerData";

const fields = [
  // { label: "Mã vận chuyển", key: "transportId" },
  { label: "Mã khách hàng", key: "customerId" },
  { label: "Họ", key: "last_name" },
  { label: "Tên", key: "first_name" },
  { label: "Email", key: "email" },

  {
    key: "show_details",
    label: "",
    _style: "width:1%",
    sorter: false,
    filter: false,
  },
];

export default {
  name: "AdvancedTables",
  data() {
    return {
      CustomerData: CustomerData.map((item, id) => {
        return { ...item, id };
      }),
      fields,
      details: [],
      collapseDuration: 0,
    };
  },
  methods: {
    toggleDetails(item) {
      this.$set(this.CustomerData[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
  },
};
</script>
