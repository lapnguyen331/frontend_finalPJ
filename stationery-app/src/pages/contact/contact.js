import {memo} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './contactStyle.scss';

function ContactPage() {
    return (
        <div className="contact-page">
            <h1 className="contact-title">Liên hệ chúng tôi</h1>
            <p className="contact-description">Chúng tôi luôn sẵn sàng lắng nghe từ bạn!</p>

            <div className="contact-section">
                <h2>Địa chỉ</h2>
                <p>123 Đường ABC, Phường XYZ, Quận 123, Thành phố ABC</p>
            </div>

            <div className="contact-section">
                <h2>Điện thoại</h2>
                <p>+84 123 456 789</p>
            </div>

            <div className="contact-section">
                <h2>Email</h2>
                <p>21130588@st.hcmuaf.edu.vn</p>
            </div>

            <div className="contact-section">
                <h2>Theo dõi chúng tôi</h2>
                <div className="social-links">
                    <a href="https://facebook.com" className="social-link facebook">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>

                    <a href="https://instagram.com" className="social-link instagram">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default memo(ContactPage);