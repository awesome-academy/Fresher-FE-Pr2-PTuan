import React from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const list = [
  {
    image:
      'https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/phoi-mau-quan-ao.jpg?v=1650962053893',
    title:
      'Bật mí 8 mẹo phối màu quần áo phong cách, sành điệu cho từng hoàn cảnh',
    description:
      '   Nắm được những cách phối màu quần áo sau đây sẽ giúp bạn có thể mặc đẹp mỗi ngày, và biến mọi outfit trở nên thật sành điệu dù là đi học, đi chơi hay đi làm.',
    icon: 'fa-solid fa-clock',
    time: '12/04/2022',
  },
  {
    image:
      'https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/sinh-nhat-yody-8-tuoi.png?v=1648733773757',
    title: 'Mừng sinh nhật YODY 8 tuổi - Tặng 8888 phần quà miễn phí ',
    description:
      '   Kỷ niệm sinh nhật 8 tuổi, YODY tổ chức chương trình tri ân lớn dành tặng đến tất cả khách hàng. Những món quà “cực hấp dẫn” đang chờ đón bạn vào tháng 4 này. Chương trình diễn ra từ 1/4 - 1/5/2022.',
    icon: 'fa-solid fa-clock',
    time: '28/04/2022',
  },
  {
    image:
      'https://bizweb.dktcdn.net/100/438/408/articles/mix-match.jpg?v=1651051420387',
    title: 'Top 5 cách phối chân váy jean dài đẹp nhất cho mùa hè',
    description:
      '   Chân váy jean dài mix match với áo gì đẹp nhất? Hãy cùng tìm hiểu cách phối chân váy jean để nàng có tổng thể hài hòa và không bao giờ lỗi mốt nhé.',
    icon: 'fa-solid fa-clock',
    time: '27/04/2022',
  },
  {
    image:
      'https://bizweb.dktcdn.net/100/438/408/articles/ao-polo-la-gi2-yody-vn.jpg?v=1649919223683',
    title: 'Áo Polo là gì? Các kiểu áo Polo và cách phối vạn người mê',
    description:
      'Là items thông dụng trong tủ đồ của mỗi người, nhưng bạn đã biết áo Polo là gì? Cách mix match làm sao để luôn thời thượng và thu hút. Tìm hiểu qua bài viết dưới đây.',
    icon: 'fa-solid fa-clock',
    time: '14/04/2022',
  },
  {
    image:
      'https://bizweb.dktcdn.net/100/438/408/articles/quan-short-jean-nam.jpg?v=1648529445650',
    title: 'Tuyển chọn mẫu quần short jean nam đẹp chuẩn “tài tử điện ảnh',
    description:
      'Quần Short Jean nam là lựa chọn hoàn hảo cho những buổi xuống phố. Thiết kế dễ mặc, dễ phối đồ, cử động thoải mái. Dưới đây là những mẫu quần Short nam giúp biến hóa đa năng cho các chàng trong mỗi buổi đi chơi, hẹn hò.',
    icon: 'fa-solid fa-clock',
    time: '29/03/2022',
  },
  {
    image:
      'https://bizweb.sapocdn.net/thumb/grande/100/438/408/articles/phoi-mau-quan-ao.jpg?v=1650962053893',
    title: 'Chính sách giảm giá sản phẩm của YODY',
    description:
      'YODY thông báo về Chính sách giảm giá sản phẩm trên toàn hệ thống. Chương trình được áp dụng cho tất cả khách hàng khi mua trực tiếp tại các cửa hàng hoặc qua website Yody.vn.',
    icon: 'fa-solid fa-clock',
    time: '11/03/2022',
  },
];
const SectionBlog = () => {
  return (
    <div className="section-blog">
      <div className="content-title">
        <h2>#YODY LOVE</h2>
      </div>
      <div className="list-blog">
        <>
          <Swiper
            breakpoints={{
              0: {
                width: 0,
                slidesPerView: 2,
              },
              480: {
                width: 480,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
              1024: {
                width: 1224,
                slidesPerView: 3,
              },
              1224: {
                width: 1224,
                slidesPerView: 5,
              },
            }}
            spaceBetween={20}
            slidesPerView={5}
            className="mySwiper"
          >
            {list.map((blog, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="blog-image">
                    <a href="#!">
                      <img src={blog.image} alt="" />
                    </a>
                  </div>
                  <div className="box-infor">
                    <div className="blog-title">
                      <a href="#!">{blog.title}</a>
                    </div>
                    <div className="blog-description">{blog.description}</div>
                    <div className="blog-time">
                      <span>
                        <i className={blog.icon}></i>
                        {blog.time}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
      <div href="#!" className="more">
        Xem thêm
      </div>
    </div>
  );
};

export default SectionBlog;
