import { StyledMain, StyledContent } from "./styled";

function HomePage() {
  return (
    <StyledMain>
      <StyledContent>
        <div>
          <h1>
            let&lsquo;s find some <br />
            <span>art</span> here!
          </h1>
          <div className="search-bar">
            <input type="text" placeholder="Search art, artist, work..." />
            <img src="./images/search-icon.svg" alt="search icon" />
          </div>
        </div>
        <section className="gallery">
          <div className="header">
            <p>Topics for you</p>
            <h2>Our special gallery</h2>
          </div>
          <div>
            <div className="card-container">
              <div className="card">
                <img src="./images/placeholder-image.png" alt="" />
                <div className="description">
                  <div className="left">
                    <p className="name">Charles V, bust length...</p>
                    <p className="author">Giovanni Britto</p>
                    <p className="visibility">Public</p>
                  </div>
                  <div className="right">
                    <button>
                      <img src="./images/orange-bookmark-icon.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="./images/placeholder-image.png" alt="" />
                <div className="description">
                  <div className="left">
                    <p className="name">Charles V, bust length...</p>
                    <p className="author">Giovanni Britto</p>
                    <p className="visibility">Public</p>
                  </div>
                  <div className="right">
                    <button>
                      <img src="./images/orange-bookmark-icon.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="./images/placeholder-image.png" alt="" />
                <div className="description">
                  <div className="left">
                    <p className="name">Charles V, bust length...</p>
                    <p className="author">Giovanni Britto</p>
                    <p className="visibility">Public</p>
                  </div>
                  <div className="right">
                    <button>
                      <img src="./images/orange-bookmark-icon.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination">
              <span className="selected">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>
                <img src="./images/right-arrow-icon.svg" alt="" />
              </span>
            </div>
          </div>
        </section>
        <section className="other-works">
          <div className="header">
            <p>Here some more</p>
            <h2>Other works for you</h2>
          </div>
          <div className="small-card-container">
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/fallback-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="small-card">
              <div className="image">
                <img src="./images/placeholder-image.png" alt="" />
              </div>
              <div className="description">
                <p className="name">Charles V, bust length...</p>
                <p className="author">Giovanni Britto</p>
                <p className="visibility">Public</p>
              </div>
              <div className="button">
                <button>
                  <img src="./images/orange-bookmark-icon.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </StyledContent>
    </StyledMain>
  );
}

export default HomePage;
