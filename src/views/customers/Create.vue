<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard>
          <CCardHeader>
            <strong>Tạo khách hàng </strong>
            <div class="card-header-actions"></div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="6">
                <CInput label="Họ" add-input-classes="rounded-0" />
              </CCol>
              <CCol sm="6">
                <CInput label="Tên" add-input-classes="rounded-0" />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="6">
                <CInput
                  label="Email"
                  type="email"
                  add-input-classes="rounded-0"
                />
              </CCol>
              <CCol sm="6">
                <CInput
                  label="Số điện thoại"
                  type="number"
                  add-input-classes="rounded-0"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="6">
                <CSelect
                  label="Giới tính"
                  :options="['Nam', 'Nữ']"
                  add-input-classes="rounded-0"
                />
              </CCol>
              <CCol sm="6">
                <CInput
                  label="Ngày sinh"
                  type="date"
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