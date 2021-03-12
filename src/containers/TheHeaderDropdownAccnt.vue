<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/user.png"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Quản lý tài khoản</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-user" /> Hồ sơ
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> Cài đặt
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <CIcon name="cil-lock-locked" /> Đăng xuất
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>