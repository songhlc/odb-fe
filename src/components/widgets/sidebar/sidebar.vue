<template>
  <nav class="navbar-default navbar-static-side">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element">
            <span>
              <img alt="image" class="img-circle" src="../../../vendor/inspina/img/profile_small.jpg" />
            </span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
               </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="profile.html">Profile</a></li>
              <li><a href="contacts.html">Contacts</a></li>
              <li><a href="mailbox.html">Mailbox</a></li>
              <li class="divider"></li>
              <li><a href="login.html">Logout</a></li>
            </ul>
          </div>
          <div class="logo-element">
            IN+
          </div>
        </li>
        <li class="active">
          <a v-link="{path:'/goods'}"><i class="fa fa-th-large"></i> <span class="nav-label">商品管理</span> <span class="fa arrow"></span></a>
        </li>
        <li>
          <a v-link="{path:'/orderreview'}"><i class="fa fa-th-large"></i> <span class="nav-label">晒单审核</span> <span class="fa arrow"></span></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-th-large"></i> <span class="nav-label">红包管理</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li><a v-link="{path:'/moneyenvelopegen'}">红包生成</a></li>
            <li><a v-link="{path:'/moneyenvelopeuse'}">红包使用统计</a></li>
          </ul>
        </li>
        <li>
          <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">数据分析</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li><a href="index.html">流水统计</a></li>
            <li><a href="dashboard_2.html">商品统计</a></li>
            <li><a href="dashboard_3.html">个人消费统计</a></li>
          </ul>
        </li>
        <li>
          <a href="index.html"><i class="fa fa-th-large"></i> <span class="nav-label">收发货管理</span> <span class="fa arrow"></span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {

}
</script>
