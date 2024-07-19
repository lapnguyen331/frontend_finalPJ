import {memo} from "react";
import Icon from '@mdi/react';
import { mdiMagnify, mdiWeight } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiBell } from '@mdi/js';
import { blue } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import { mdiShoppingOutline } from '@mdi/js';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import logo from '../../resource/logo.webp';
import './headerStyle.scss';


function Header (){
    return (
        <header className="header">
            <div className="mid-header">
                <div className="header-container">
                    <div className="wrapper">
                        <div className="header-right">
                            <a href="home" className="logo-wrapper">
                                <img className="img-fluid" src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="header-center">
                            {/* //search form */}
                            <form action="search" method="get" className=" input-group search-bar" role="search">
                                <input type="search" name="search-product" placeholder="Tìm kiếm sản phẩm..." className="input-search"/>
                                <span className="search-action">
                                    <button type="submit" className="search-button">
                                        <Icon path={mdiMagnify} size={1} style={{ color: blue[800] }}/>
                                    </button>
                                </span>
                            </form>
                            {/*// suggest sp khi search */}
                            <div className="search-suggest" >
                                <ul>
                                    <li>
                                        <a>sản phẩm suggest 1</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="header-left">
                            <ul>
                                <li className="hot-line">
                                    <div className="icon">
                                        <Icon path={mdiPhone} size={1} style={{ color: blue[800] }} />
                                    </div>
                                    <div className="detail">
                                        <span>Hỗ trợ khách hàng</span>
                                        <a className="phone-num">1900 100 615</a>
                                    </div>
                                </li>
                                <li className="user-prof">
                                    <div className="icon">
                                        <PersonOutlineOutlinedIcon style={{ color: blue[800]}} />
                                    </div>
                                    <div className="detail">
                                        <a className="userName">User 1</a>
                                        <small>Đăng xuất</small>
                                    </div>
                                </li>
                                <li className="cart-group">
                                    <div className="mini-cart">
                                        <a className="hover-cart" href="/cart">
                                            <Icon path={mdiShoppingOutline} size={1} />
                                            <span className="cart-text">Giỏ hàng</span>
                                            <span className="item-num">8</span>
                                        </a>
                                        {/* cart hover xem các sản phẩm */}
                                        <div className="top-cart-content card">
                                            <form className="cart-header-form">
                                                <ul id="cart-sidebar" className="mini-product-list">
                                                    <div className="no-item">
                                                        <p>Không có sản phẩm nào</p>
                                                    </div>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li className="noti-head">
                                    <div className="noti-wrapper">
                                        <div className="noti-head-count">0</div>
                                        <Icon path={mdiBell} size={1.3} style={{color: yellow[500]}} />

                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default memo(Header);