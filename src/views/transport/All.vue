<template>
  <CCard>
    <!-- <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/> {{caption}}
      </slot>
    </CCardHeader> -->
    <CCardBody>
      <CDataTable
        :items="TransportData"
        :fields="fields"
        column-filter
        table-filter
        items-per-page-select
        :items-per-page="5"
        hover
        sorter
        pagination
      >
        <template #status="{ item }">
          <td>
            <CBadge :color="getBadgeStatus(item.status)">
              {{ item.status }}
            </CBadge>
          </td>
        </template>
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
              <h4>
                {{ item.customer }}
              </h4>
              <p>Mã đơn hàng: {{ item.orderId }}</p>
              <p>
                COD:
                <CBadge :color="getBadgeCod(item.cod)">
                  {{ item.cod }}
                </CBadge>
              </p>
              <p>Tiền COD: {{ item.cod_price }}</p>
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
import TransportData from "./TransportData";

const fields = [
  { label: "Mã vận chuyển", key: "transportId" },
  // { label: "Mã đơn hàng", key: "orderId" },
  { label: "Khách hàng", key: "customer" },
  { label: "Nhà vận chuyển", key: "transporter" },
  { label: "Ngày tạo", key: "created_at" },
  { label: "Trạng thái", key: "status" },
  // { label: "COD", key: "cod" },
  // { label: "Tiền COD", key: "cod_price" },

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
      TransportData: TransportData.map((item, id) => {
        return { ...item, id };
      }),
      fields,
      details: [],
      collapseDuration: 0,
    };
  },
  methods: {
    getBadgeStatus(status) {
      switch (status) {
        case "Hoàn tất":
          return "success";
        case "Đang giao":
          return "secondary";
        case "Đang xử lý":
          return "warning";
        case "Đã hủy":
          return "danger";
        default:
          "primary";
      }
    },
    getBadgeCod(cod) {
      switch (cod) {
        case "Thu":
          return "success";
        case "Không thu":
          return "secondary";
        default:
          "primary";
      }
    },
    toggleDetails(item) {
      this.$set(this.TransportData[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
  },
};
</script>
