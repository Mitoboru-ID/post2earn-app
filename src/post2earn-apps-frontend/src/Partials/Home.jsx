export default function Home(){
  return(
      <>
          <div className="container">
              <section className="header mt-5">
                 
                  <div className="header-title text-center">
                      <h1>Jeckie</h1>
                  </div>
                  <div className="header-description text-center">
                      <p>Jeckie is the ultimate platform designed to elevate awareness of outstanding <span>local businesses.</span> Whether you're a community-driven entrepreneur or a savvy customer seeking hidden gems, Jeckie connects you to the heart of your neighborhood. We spotlight the businesses that make your area special, <span>empowering growth</span> and helping local communities thrive.</p>
                  </div>
                  <div className="header-quote text-center">
                      <p>"Discover Local Gems, Amplified by <span>Jeckie</span>"</p>
                  </div>
              </section>
              <section className="about">
                  <div className="row mt-5">
                      
                      <div className="col-md-6">
                          <h1>
                              Increase Awareness great local businesses.
                          </h1>
                      </div>
                      <div className="col-md-6">
                          <p>
                          With this app, we help micro and small businesses thrive by increasing engagement and connecting them with the community. Discover hidden gems around you, support local, and experience the power of growth together.
                          </p>
                      </div>
                  </div>
                  <div className="row mt-5">

                      <div className="col-md-12 ">
                          <img src="demand.png" alt="" />
                      </div>
                      
                  </div>
                  <div className="row">
                      <div className="col-md-12 col-lg-12 col-sm-12 text-center mt-5">
                          <h4>Increase Awareness great local businesses in around society make impactfull.</h4>
                      </div>
                  </div>
                  
              </section>

              <section className="feed">
                  <div className="header text-center">
                      <h1>Recently Feed</h1>
                  </div>
                  <div className="body text-center">
                      <div className="row">
                          <div className="col-md-6">
                              <div className="card">
                              <div className="card-header">
                                  <p>Udin</p>
                                  <p class="card-text"><small class="text-body-secondary">Last posted 3 mins ago</small></p>

                              </div>
                                  <img src="https://blkp.co.id/uploads/filemanager/Desain%20Warung%20Kecil%20Depan%20Rumah%202.jpg" className="card-img-top"/>
                                  <div className="card-body">
                                      {/* <h5 className="card-title">Card title</h5> */}
                                      <p>This Coffee shop really looks vintage style, and flavour that coffee has good taste</p>
                                      <a href="#" className="btn btn-primary me-2">Like</a>
                                      <a href="#" className="btn btn-primary">Comments</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                          <div className="card">
                              <div className="card-header">
                                  <p>Anthony</p>
                                  <p class="card-text"><small class="text-body-secondary">Last posted 3 mins ago</small></p>

                              </div>
                              <img src="https://i0.wp.com/rumahmebel.id/wp-content/uploads/2023/06/Desain-Warung-Kopi-Sederhana-Di-Kampung-1.jpg?resize=600%2C750&ssl=1" className="card-img-top"/>
                              <div className="card-body">
                                  {/* <h5 className="card-title">Card title</h5> */}
                                  <p>Wow This place selling gorengan the best one in the world, i felt dies</p>
                                  <a href="#" className="btn btn-primary me-2">Like</a>
                                  <a href="#" className="btn btn-primary">Comments</a>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </>
  )
}