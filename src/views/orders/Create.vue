<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard>
          <CCardHeader>
            <strong>Tạo đơn hàng </strong>
            <div class="card-header-actions"></div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput label="Khách hàng" add-input-classes="rounded-0" />
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="12">
                <CSelect
                  label="Nhà vận chuyển"
                  :options="[
                    'Giao hàng nhanh',
                    'Giao hàng tiết kiệm',
                    'Viettel Post',
                    'Ninja Van',
                  ]"
                  add-input-classes="rounded-0"
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="12">
                <CInput
                  label="Ngày tạo"
                  type="date"
                  add-input-classes="rounded-0"
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="12">
                <CSelect
                  label="COD"
                  :options="['Thu', 'Không thu']"
                  add-input-classes="rounded-0"
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="12">
                <CInput
                  label="Tiền COD"
                  type="number"
                  add-input-classes="rounded-0"
                />
              </CCol>
            </CRow>

            <CRow>
              <CCol sm="12">
                <CSelect
                  label="Trạng thái"
                  :options="['Đang xử lý', 'Đang giao', 'Đã giao', 'Đã hủy']"
                  add-input-classes="rounded-0"
                />
              </CCol>
            </CRow>
          </CCardBody>

          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"
              ><CIcon name="cil-check-circle" /> Cập nhật</CButton
            >
            <CButton type="reset" size="sm" color="danger"
              ><CIcon name="cil-ban" /> Làm lại</CButton
            >
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>