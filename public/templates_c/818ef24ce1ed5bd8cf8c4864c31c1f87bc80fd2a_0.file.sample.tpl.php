<?php
/* Smarty version 3.1.32, created on 2018-08-21 21:40:46
  from '/Users/Nehan-Devil/private/05_tottoko/public/templates/sample.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32',
  'unifunc' => 'content_5b7c084e009ee6_71455487',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '818ef24ce1ed5bd8cf8c4864c31c1f87bc80fd2a' => 
    array (
      0 => '/Users/Nehan-Devil/private/05_tottoko/public/templates/sample.tpl',
      1 => 1534855245,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5b7c084e009ee6_71455487 (Smarty_Internal_Template $_smarty_tpl) {
?><!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <!-- meta-->
    <title>kayac-html5-starter</title>
    <meta name="description" content="kayac-html5-starter web page.">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="format-detection" content="telephone=no">
    <!-- smartphone meta-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
    <!-- ogp-->
    <meta property="og:type" content="website">
    <meta property="og:title" content="kayac-html5-starter">
    <meta property="og:site_name" content="kayac-html5-starter">
    <meta property="og:description" content="kayac-html5-starter web page.">
    <meta property="og:locale" content="ja_JP">
    <!-- twitter card-->
    <meta property="twitter:card" content="summary">
    <meta property="twitter:title" content="kayac-html5-starter">
    <meta property="twitter:description" content="kayac-html5-starter web page.">
    <!-- stylesheet-->
  <link href="/css/style.css" rel="stylesheet"></head>
  <body>
    <div class="wrapper">
      <div class="sample-icon"> </div>
      <div class="test">
        <?php echo $_smarty_tpl->tpl_vars['sample']->value;
$_smarty_tpl->tpl_vars['foo'] = new Smarty_Variable(null, $_smarty_tpl->isRenderingCache);$_smarty_tpl->tpl_vars['foo']->step = 1;$_smarty_tpl->tpl_vars['foo']->total = (int) ceil(($_smarty_tpl->tpl_vars['foo']->step > 0 ? 3+1 - (1) : 1-(3)+1)/abs($_smarty_tpl->tpl_vars['foo']->step));
if ($_smarty_tpl->tpl_vars['foo']->total > 0) {
for ($_smarty_tpl->tpl_vars['foo']->value = 1, $_smarty_tpl->tpl_vars['foo']->iteration = 1;$_smarty_tpl->tpl_vars['foo']->iteration <= $_smarty_tpl->tpl_vars['foo']->total;$_smarty_tpl->tpl_vars['foo']->value += $_smarty_tpl->tpl_vars['foo']->step, $_smarty_tpl->tpl_vars['foo']->iteration++) {
$_smarty_tpl->tpl_vars['foo']->first = $_smarty_tpl->tpl_vars['foo']->iteration === 1;$_smarty_tpl->tpl_vars['foo']->last = $_smarty_tpl->tpl_vars['foo']->iteration === $_smarty_tpl->tpl_vars['foo']->total;?>
        <li><?php echo $_smarty_tpl->tpl_vars['foo']->value;?>
</li><?php }
}
?>
      </div>
    </div>
    <!-- javascript-->
  <?php echo '<script'; ?>
 type="text/javascript" src="/js/script.js"><?php echo '</script'; ?>
></body>
</html><?php }
}
