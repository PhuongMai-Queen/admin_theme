<template>
  <div>
    <h2>Tạo sản phẩm</h2>
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
                    label="Tên sản phẩm"
                    placeholder=" Nhâp tên sản phẩm"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CTextarea
                    label="Mô tả sản phẩm"
                />
              </CCol>
            </CRow>
              <CRow>
                <CCol sm="12">
                  <CInput
                      label="Trích dẫn"
                      placeholder="Trích dẫn sản phẩm"
                  />
                </CCol>
              </CRow>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Hình ảnh sản phẩm</strong>
            <div class="card-header-actions">
              <a href="https://coreui.io/vue/docs/components/form-components"
                 class="card-header-action"
                 rel="noreferrer noopener"
                 target="_blank">
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CInputFile
                label="Thêm hình ảnh"
                horizontal
                custom
            />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Giá sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="6">
                <CardHeader>
                  <strong>Giá bán</strong>
                  <CInput
                      placeholder="0đ"
                      autocomplete="email"
                  >
                  </CInput>
                </CardHeader>
              </CCol>
              <CCol sm="6">
                <CardHeader>
                  <strong>Giá so sánh</strong>
                  <CInput
                      placeholder="0đ"
                      autocomplete="email"
                  >
                  </CInput>
                </CardHeader>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardHeader>
            <strong>Quản lý tồn kho </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="6">
                <CardHeader>
                  <strong>Mã sản phẩm</strong>
                  <CInput
                      autocomplete="email"
                  >
                  </CInput>
                </CardHeader>
              </CCol>
              <CCol sm="6">
                <CardHeader>
                  <strong>Barcode</strong>
                  <CInput
                      autocomplete="email"
                  >
                  </CInput>
                </CardHeader>
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="6">
                <CardHeader>
                  <strong>Chính sách tồn kho</strong>
                  <CSelect
                      :options="options"
                      placeholder="Please select"
                  />
                </CardHeader>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardHeader>
            <strong>Vận chuyển</strong>
          </CCardHeader>
          <CCardBody>
            <CardHeader>
              <strong>Khối lượng </strong><small>grams</small>
              <CInput
                  placeholder="0"
              >
              </CInput>
              Có giao hàng
              <CSwitch
                  class="mr-1 float-left"
                  color="danger"
                  :checked="true"
                  shape="pill"
                  variant="opposite"
              />
            </CardHeader>
          </CCardBody>
          <CCardBody>
            <CardHeader class="d-flex justify-content-between">
              <strong>Khối lượng </strong>
              <router-link to="#">Thêm phiên bản</router-link>
            </CardHeader>
            <CCardBody>
              <p>Sản phẩm có các phiên bản dựa theo thuộc tính như kích thước hoặc màu sắc</p>
            </CCardBody>
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
            </div><br>
            <div>
              <CSwitch
                  class="float-left mr-1"
                  size="sm"
                  shape="pill"
                  color="info"
                  data-on="On"
                  data-off="Off"
                  :checked="true"
              />
              POS
            </div><br>
            <div>
              <CSwitch
                  class="float-left mr-1"
                  size="sm"
                  shape="pill"
                  color="info"
                  data-on="On"
                  data-off="Off"
                  :checked="true"
              />
              Zalo
            </div>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Phân loại</strong>
          </CCardHeader>
          <CCardBody>
            <CSelect
                label="Loại sản phẩm"
                :options="options"
                placeholder="Chọn loại sản phẩm"
                custom
            />
            <CSelect
                label="Nhà sản xuất"
                :options="options"
                placeholder="Chọn nhà sản xuất"
                custom
            />
            <CSelect
                label="Nhóm sản phẩm"
                :options="options"
                placeholder="Chọn nhóm sản phẩm"
                custom
            />
          </CCardBody>
          <CCardHeader>
            <strong>Nhãn</strong>
          </CCardHeader>
          <CCardBody>
            <div>
              <vue-tags-input
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
              />
            </div>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Khuyến mãi</strong>
          </CCardHeader>
          <CCardBody>
            <div>
              Không áp dụng khuyến mãi
              <CSwitch
                  class="float-left mr-1"
                  size="sm"
                  shape="pill"
                  color="info"
                  data-on="On"
                  data-off="Off"
                  :checked="false"
              />
            </div>
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
export default {
  components: {
    VueTagsInput
  },
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
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
      editor: ClassicEditor,
    }
  },
  methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    }
  },
}
</script>
