<template>
  <div>
    <h2>Tạo nhóm sản phẩm</h2>
    <CRow>
      <CCol sm="9">
        <CCard>
          <CCardHeader>
            <strong>Thông tin chung</strong>
            <div class="card-header-actions">
              <a href="https://coreui.io/vue/docs/components/form-components"
                 class="card-header-action"
                 rel="noreferrer noopener"
                 target="_blank">
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput
                    label="Tên nhóm sản phẩm"
                    placeholder=" Nhâp tên nhóm sản phẩm"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CTextarea
                    label="Mô tả"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Thêm Sản Phẩm Vào Danh Mục</strong>
            <p>Bạn có thể chọn một trong hai cách bên dưới để thêm sản phẩm vào danh mục này.</p>
          </CCardHeader>
          <CCardBody>
                <div>
                  <label class="m-0"><input type="radio" name="radio" checked @click="accordion = accordion === 0 ? false : 0"> Tự chọn sản phẩm</label>
                  <CCollapse :show="accordion === 0">
                  </CCollapse>
                </div>
                <div>
                  <label class="m-0"><input type="radio" name="radio" @click="accordion = accordion === 1 ? false : 1"> Sản phẩm tự động cập nhật dựa trên những điều kiện</label>
                  <CCollapse :show="accordion === 1">
                    <CCardBody>
                      <div class="d-flex">
                        <strong>Các sản phẩm phải phù hợp </strong>
                        <div class="ml-5">
                          <div>
                            <label><input type="radio" name="condition" checked>Tất cả các điều kiện</label>
                          </div>
                          <div>
                            <label><input type="radio" name="condition">Bất kỳ điều kiện nào</label>
                          </div>
                        </div>
                      </div>
                    </CCardBody>
                    <CCardBody>
                      <CRow>
                        <CCol sm="4">
                          <CSelect
                              :options="options"
                              placeholder="Tên sản phẩm"
                          />
                        </CCol>
                        <CCol sm="4">
                          <CSelect
                              :options="options"
                              placeholder="Bằng"
                          />
                        </CCol>
                        <CCol sm="4">
                          <CInput/>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCollapse>
                </div>
              </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <div class="d-flex justify-content-between">
              <strong>Tối ưu SEO </strong>
              <router-link to="#">Chỉnh sửa SEO</router-link>
            </div>
            <p>Thiết lập các thẻ giúp khách hàng dễ dàng tìm thấy sản phẩm trên công cụ tìm kiếm như Google</p>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput
                    label="Tiêu đề trang"
                />
                <CTextarea
                    label="Mô tả trang"
                />
                <CInput
                    label="Đường dẫn"
                    placeholder="http://localhost:8080/#/products/create_products/"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="3">
        <CCard>
          <CCardHeader>
            <strong>Hiển thị</strong>
          </CCardHeader>
          <CCardBody>
            <div>
              Website
              <CSwitch
                  class="float-left mr-1"
                  size="sm"
                  shape="pill"
                  color="info"
                  data-on="On"
                  data-off="Off"
                  :checked="true"
              /><br><br>
              <div>
                <input type="datetime-local" class="form-control"/>
              </div>
            </div>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <div class="d-flex justify-content-between">
              <strong>Menu </strong>
              <router-link to="#">Thêm menu</router-link>
            </div>
          </CCardHeader>
          <CCardBody>
            <CSelect
                :options="options"
                placeholder="Chọn menu"
                custom
            />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
              <strong>Hình đại diện </strong>
          </CCardHeader>
          <CCardBody>
            <CInputFile
                custom
            />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Giao diện</strong>
          </CCardHeader>
          <CCardBody>
            <CSelect
                :options="options"
                placeholder="Chọn giao diện"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow class="float-right">
      <template v-for="(color, key) in ['danger']">
        <router-link to="/products/create_products">
          <CButton
              :color="color"
              class="m-2"
          >
            Hủy
          </CButton>
        </router-link>
      </template>
      <template v-for="(color, key) in ['success']">
        <router-link to="/products/create_products">
          <CButton
              :color="color"
              class="m-2"
          >
            Lưu
          </CButton>
        </router-link>
      </template>
    </CRow>

  </div>
</template>
<script>
import VueTagsInput from '@johmun/vue-tags-input';
import Discount from "@/views/discount/Discount";
export default {
  components: {
    Discount,
    VueTagsInput
  },
  data () {
    return {
      collapse: false,
      cardCollapse: true,
      innerCollapse: false,
      accordion: 0,
      selected: [],
      show: true,
      horizontal: {label: 'col-3', input: 'col-9'},
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        {
          value: 'some value',
          label: 'Selected option'
        }
      ],
      selectedOption: 'some value',
      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
        'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
        'Radios - custom', 'Inline Radios - custom'],
      tag: '',
      tags: [],
    }
  },
  methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    }
  },
}
</script>
