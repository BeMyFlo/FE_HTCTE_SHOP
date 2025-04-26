export default function Main() {
   return (
      <div>
         {/* slider */}
         <div className="hom-slider">
            <div className="container">
               <div id="sequence">
                  <div className="sequence-prev"><i className="fa fa-angle-left"></i></div>
                  <div className="sequence-next"><i className="fa fa-angle-right"></i></div>
                  <ul className="sequence-canvas">
                     <li className="animate-in">
                        <div className="flat-caption caption1 formLeft delay300 text-center">
                           <span className="suphead">Paris show 2014</span>
                        </div>
                        <div className="flat-caption caption2 formLeft delay400 text-center">
                           <h1>Collection For Winter</h1>
                        </div>
                        <div className="flat-caption caption3 formLeft delay500 text-center">
                           <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                           </p>
                        </div>
                        <div className="flat-button caption4 formLeft delay600 text-center">
                           <a className="more" href="#">More Details</a>
                        </div>
                        <div className="flat-image formBottom delay200" data-duration="5" data-bottom="true">
                           <img src="images/slider-image-01.png" alt="Slide 1" />
                        </div>
                     </li>
                     <li>
                        <div className="flat-caption caption2 formLeft delay400">
                           <h1>Collection For Winter</h1>
                        </div>
                        <div className="flat-caption caption3 formLeft delay500">
                           <h2>
                              Etiam velit purus, luctus vitae velit sedauctor<br />
                              egestas diam, Etiam velit purus.
                           </h2>
                        </div>
                        <div className="flat-button caption5 formLeft delay600">
                           <a className="more" href="#">More Details</a>
                        </div>
                        <div className="flat-image formBottom delay200" data-bottom="true">
                           <img src="images/slider-image-02.png" alt="Slide 2" />
                        </div>
                     </li>
                     <li>
                        <div className="flat-caption caption2 formLeft delay400 text-center">
                           <h1>New Fashion of 2013</h1>
                        </div>
                        <div className="flat-caption caption3 formLeft delay500 text-center">
                           <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                              Lorem Ipsum is simply dummy text of the printing and typesetting
                           </p>
                        </div>
                        <div className="flat-button caption4 formLeft delay600 text-center">
                           <a className="more" href="#">More Details</a>
                        </div>
                        <div className="flat-image formBottom delay200" data-bottom="true">
                           <img src="images/slider-image-03.png" alt="Slide 3" />
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="promotion-banner">
               <div className="container">
                  <div className="row">
                     <div className="col-md-4 col-sm-4 col-xs-4">
                        <div className="promo-box">
                           <img src="images/promotion-01.png" alt="Promotion 1" />
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-4 col-xs-4">
                        <div className="promo-box">
                           <img src="images/promotion-02.png" alt="Promotion 2" />
                        </div>
                     </div>
                     <div className="col-md-4 col-sm-4 col-xs-4">
                        <div className="promo-box">
                           <img src="images/promotion-03.png" alt="Promotion 3" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* container */}
         <div className="container_fullwidth">
            <div className="container">
               <div className="hot-products">
                  <h3 className="title"><strong>Hot</strong> Products</h3>
                  <div className="control">
                     <a id="prev_hot" className="prev" href="#">&lt;</a>
                     <a id="next_hot" className="next" href="#">&gt;</a>
                  </div>
                  <u id="hot">
                     <li>
                        <div className="row">
                           {[1, 2, 3, 4].map((_, idx) => (
                              <div className="col-md-3 col-sm-6" key={idx}>
                                 <div className="products">
                                    {idx === 0 && <div className="offer">- %20</div>}
                                    {idx === 2 && <div className="offer">New</div>}
                                    <div className="thumbnail">
                                       <a href="details.html">
                                          <img src={`images/products/small/products-0${idx + 1}.png`} alt="Product Name" />
                                       </a>
                                    </div>
                                    <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                                    <h4 className="price">$451.00</h4>
                                    <div className="button_group">
                                       <button className="button add-cart" type="button">Add To Cart</button>
                                       <button className="button compare" type="button"><i className="fa fa-exchange"></i></button>
                                       <button className="button wishlist" type="button"><i className="fa fa-heart-o"></i></button>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </li>
                     {/* Lặp lại đoạn li nếu có nhiều trang sản phẩm */}
                  </u>
               </div>

               <div className="clearfix"></div>

               <div className="featured-products">
                  <h3 className="title"><strong>Featured</strong> Products</h3>
                  <div className="control">
                     <a id="prev_featured" className="prev" href="#">&lt;</a>
                     <a id="next_featured" className="next" href="#">&gt;</a>
                  </div>
                  <ul id="featured">
                     <li>
                        <div className="row">
                           {[5, 6, 7, 4].map((id, idx) => (
                              <div className="col-md-3 col-sm-6" key={idx}>
                                 <div className="products">
                                    {id === 7 && <div className="offer">New</div>}
                                    <div className="thumbnail">
                                       <a href="details.html">
                                          <img src={`images/products/small/products-0${id}.png`} alt="Product Name" />
                                       </a>
                                    </div>
                                    <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                                    <h4 className="price">$451.00</h4>
                                    <div className="button_group">
                                       <button className="button add-cart" type="button">Add To Cart</button>
                                       <button className="button compare" type="button"><i className="fa fa-exchange"></i></button>
                                       <button className="button wishlist" type="button"><i className="fa fa-heart-o"></i></button>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </li>
                     {/* Lặp lại đoạn li nếu có thêm sản phẩm */}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
