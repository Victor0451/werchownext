import React from "react";

import Navbar from "../navbar/Navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="">
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sandstone/bootstrap.min.css"
        ></link> */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css"
        />
        <title>WERCHOW - SGI</title>
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossOrigin="anonymous"
      ></script>
      <style jsx global>
        {`
          /* WERCHOW && MUTUAL LOGO */
          .werchowlogo {
            width: 150px;
            height: 25px;
          }

          .mutuallogo {
            width: 175px;
            height: 50px;
          }

          /* MENU Y SUB MENU */

          .dropdown-submenu {
            position: relative;
          }

          .dropdown-submenu > .dropdown-menu {
            top: 0;
            left: 100%;
            margin-top: -6px;
            margin-left: -1px;
            -webkit-border-radius: 0 6px 6px 6px;
            -moz-border-radius: 0 6px 6px;
            border-radius: 0 6px 6px 6px;
          }

          .dropdown-submenu:hover > .dropdown-menu {
            display: block;
          }

          .dropdown-submenu > a:after {
            display: block;
            content: " ";
            float: right;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            border-width: 5px 0 5px 5px;
            border-left-color: #ccc;
            margin-top: 5px;
            margin-right: -10px;
          }

          .dropdown-submenu:hover > a:after {
            border-left-color: #fff;
          }

          .dropdown-submenu.pull-left {
            float: none;
          }

          .dropdown-submenu.pull-left > .dropdown-menu {
            left: -100%;
            margin-left: 10px;
            -webkit-border-radius: 6px 0 6px 6px;
            -moz-border-radius: 6px 0 6px 6px;
            border-radius: 6px 0 6px 6px;
          }

          /* REACT-TABLE */

          .ReactTable {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            border: 1px solid rgba(0, 0, 0, 0.1);
          }

          .ReactTable * {
            box-sizing: border-box;
          }

          .ReactTable .rt-table {
            -webkit-box-flex: 1;
            -ms-flex: auto 1;
            flex: auto 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            width: 100%;
            border-collapse: collapse;
            overflow: auto;
          }

          .ReactTable .rt-thead {
            -webkit-box-flex: 1;
            -ms-flex: 1 0 auto;
            flex: 1 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .ReactTable .rt-thead.-headerGroups {
            background: rgba(0, 0, 0, 0.03);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .ReactTable .rt-thead.-filters {
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .ReactTable .rt-thead.-filters input,
          .ReactTable .rt-thead.-filters select {
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: #fff;
            padding: 5px 7px;
            font-size: inherit;
            border-radius: 3px;
            font-weight: normal;
            outline-width: 0;
          }

          .ReactTable .rt-thead.-filters .rt-th {
            border-right: 1px solid rgba(0, 0, 0, 0.02);
          }

          .ReactTable .rt-thead.-header {
            box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
          }

          .ReactTable .rt-thead .rt-tr {
            text-align: center;
          }

          .ReactTable .rt-thead .rt-th,
          .ReactTable .rt-thead .rt-td {
            padding: 5px 5px;
            line-height: normal;
            position: relative;
            border-right: 1px solid rgba(0, 0, 0, 0.05);
            transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: inset 0 0 0 0 transparent;
          }

          .ReactTable .rt-thead .rt-th.-sort-asc,
          .ReactTable .rt-thead .rt-td.-sort-asc {
            box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.6);
          }

          .ReactTable .rt-thead .rt-th.-sort-desc,
          .ReactTable .rt-thead .rt-td.-sort-desc {
            box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.6);
          }

          .ReactTable .rt-thead .rt-th.-cursor-pointer,
          .ReactTable .rt-thead .rt-td.-cursor-pointer {
            cursor: pointer;
          }

          .ReactTable .rt-thead .rt-th:last-child,
          .ReactTable .rt-thead .rt-td:last-child {
            border-right: 0;
          }

          .ReactTable .rt-thead .rt-th:focus {
            outline-width: 0;
          }

          .ReactTable .rt-thead .rt-resizable-header {
            overflow: visible;
          }

          .ReactTable .rt-thead .rt-resizable-header:last-child {
            overflow: hidden;
          }

          .ReactTable .rt-thead .rt-resizable-header-content {
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .ReactTable .rt-thead .rt-header-pivot {
            border-right-color: #f7f7f7;
          }

          .ReactTable .rt-thead .rt-header-pivot:after,
          .ReactTable .rt-thead .rt-header-pivot:before {
            left: 100%;
            top: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
          }

          .ReactTable .rt-thead .rt-header-pivot:after {
            border-color: rgba(255, 255, 255, 0);
            border-left-color: #fff;
            border-width: 8px;
            margin-top: -8px;
          }

          .ReactTable .rt-thead .rt-header-pivot:before {
            border-color: rgba(102, 102, 102, 0);
            border-left-color: #f7f7f7;
            border-width: 10px;
            margin-top: -10px;
          }

          .ReactTable .rt-tbody {
            -webkit-box-flex: 99999;
            -ms-flex: 99999 1 auto;
            flex: 99999 1 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            overflow: auto;
          }

          .ReactTable .rt-tbody .rt-tr-group {
            border-bottom: solid 1px rgba(0, 0, 0, 0.05);
          }

          .ReactTable .rt-tbody .rt-tr-group:last-child {
            border-bottom: 0;
          }

          .ReactTable .rt-tbody .rt-td {
            border-right: 1px solid rgba(0, 0, 0, 0.02);
          }

          .ReactTable .rt-tbody .rt-td:last-child {
            border-right: 0;
          }

          .ReactTable .rt-tbody .rt-expandable {
            cursor: pointer;
            text-overflow: clip;
          }

          .ReactTable .rt-tr-group {
            -webkit-box-flex: 1;
            -ms-flex: 1 0 auto;
            flex: 1 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
          }

          .ReactTable .rt-tr {
            -webkit-box-flex: 1;
            -ms-flex: 1 0 auto;
            flex: 1 0 auto;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
          }

          .ReactTable .rt-th,
          .ReactTable .rt-td {
            -webkit-box-flex: 1;
            -ms-flex: 1 0 0px;
            flex: 1 0 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 7px 5px;
            overflow: hidden;
            transition: 0.3s ease;
            transition-property: width, min-width, padding, opacity;
          }

          .ReactTable .rt-th.-hidden,
          .ReactTable .rt-td.-hidden {
            width: 0 !important;
            min-width: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            opacity: 0 !important;
          }

          .ReactTable .rt-expander {
            display: inline-block;
            position: relative;
            margin: 0;
            color: transparent;
            margin: 0 10px;
          }

          .ReactTable .rt-expander:after {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%) rotate(-90deg);
            transform: translate(-50%, -50%) rotate(-90deg);
            border-left: 5.04px solid transparent;
            border-right: 5.04px solid transparent;
            border-top: 7px solid rgba(0, 0, 0, 0.8);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
          }

          .ReactTable .rt-expander.-open:after {
            -webkit-transform: translate(-50%, -50%) rotate(0);
            transform: translate(-50%, -50%) rotate(0);
          }

          .ReactTable .rt-resizer {
            display: inline-block;
            position: absolute;
            width: 36px;
            top: 0;
            bottom: 0;
            right: -18px;
            cursor: col-resize;
            z-index: 10;
          }

          .ReactTable .rt-tfoot {
            -webkit-box-flex: 1;
            -ms-flex: 1 0 auto;
            flex: 1 0 auto;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
          }

          .ReactTable .rt-tfoot .rt-td {
            border-right: 1px solid rgba(0, 0, 0, 0.05);
          }

          .ReactTable .rt-tfoot .rt-td:last-child {
            border-right: 0;
          }

          .ReactTable.-striped .rt-tr.-odd {
            background: rgba(0, 0, 0, 0.03);
          }

          .ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {
            background: rgba(0, 0, 0, 0.05);
          }

          .ReactTable .-pagination {
            z-index: 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            padding: 3px;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
            border-top: 2px solid rgba(0, 0, 0, 0.1);
          }

          .ReactTable .-pagination input,
          .ReactTable .-pagination select {
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: #fff;
            padding: 5px 7px;
            font-size: inherit;
            border-radius: 3px;
            font-weight: normal;
            outline-width: 0;
          }

          .ReactTable .-pagination .-btn {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            display: block;
            width: 100%;
            height: 100%;
            border: 0;
            border-radius: 3px;
            padding: 6px;
            font-size: 1em;
            color: rgba(0, 0, 0, 0.6);
            background: rgba(0, 0, 0, 0.1);
            transition: all 0.1s ease;
            cursor: pointer;
            outline-width: 0;
          }

          .ReactTable .-pagination .-btn[disabled] {
            opacity: 0.5;
            cursor: default;
          }

          .ReactTable .-pagination .-btn:not([disabled]):hover {
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
          }

          .ReactTable .-pagination .-previous,
          .ReactTable .-pagination .-next {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            text-align: center;
          }

          .ReactTable .-pagination .-center {
            -webkit-box-flex: 1.5;
            -ms-flex: 1.5;
            flex: 1.5;
            text-align: center;
            margin-bottom: 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: distribute;
            justify-content: space-around;
          }

          .ReactTable .-pagination .-pageInfo {
            display: inline-block;
            margin: 3px 10px;
            white-space: nowrap;
          }

          .ReactTable .-pagination .-pageJump {
            display: inline-block;
          }

          .ReactTable .-pagination .-pageJump input {
            width: 70px;
            text-align: center;
          }

          .ReactTable .-pagination .-pageSizeOptions {
            margin: 3px 10px;
          }

          .ReactTable .rt-noData {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background: rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
            z-index: 1;
            pointer-events: none;
            padding: 20px;
            color: rgba(0, 0, 0, 0.5);
          }

          .ReactTable .-loading {
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
            z-index: -1;
            opacity: 0;
            pointer-events: none;
          }

          .ReactTable .-loading > div {
            position: absolute;
            display: block;
            text-align: center;
            width: 100%;
            top: 50%;
            left: 0;
            font-size: 15px;
            color: rgba(0, 0, 0, 0.6);
            -webkit-transform: translateY(-52%);
            transform: translateY(-52%);
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .ReactTable .-loading.-active {
            opacity: 1;
            z-index: 2;
            pointer-events: all;
          }

          .ReactTable .-loading.-active > div {
            -webkit-transform: translateY(50%);
            transform: translateY(50%);
          }

          .ReactTable .rt-resizing .rt-th,
          .ReactTable .rt-resizing .rt-td {
            transition: none !important;
            cursor: col-resize;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}
      </style>
    </div>
  );
};
export default Layout;
