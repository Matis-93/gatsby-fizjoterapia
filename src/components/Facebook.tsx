import React, { RefObject } from "react"
import { Col, Row } from "react-bootstrap"
import Title from "./Title"
import "./Facebook.css"

const Facebook = ({
  fbRefer,
  priceRefer,
}: {
  fbRefer: RefObject<HTMLDivElement>
  priceRefer: RefObject<HTMLDivElement>
}) => {
  return (
    <>
      <Row className="pb-4">
        <Col
          md={12}
          xl={6}
          className="d-flex flex-column align-items-center gap-4"
        >
          <Title refer={fbRefer}>Facebook</Title>
          <iframe
            id="fbiframe"
            name="f3271f2d256ad88"
            width="500px"
            height="500px"
            data-testid="fb:page Facebook Social Plugin"
            title="fb:page Facebook Social Plugin"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            allow="encrypted-media"
            loading="lazy"
            src="https://www.facebook.com/v14.0/plugins/page.php?adapt_container_width=true&amp;app_id=1306503216811421&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1c630729712fd4%26domain%3Dlocalhost%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ff739ae953c6894%26relation%3Dparent.parent&amp;container_width=500&amp;height=500&amp;hide_cover=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffizjoterapianogawica%2F&amp;lazy=true&amp;locale=pl_PL&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;tabs=timeline&amp;width=500"
            style={{
              border: "none",
              width: "500px",
              height: "500px",
              visibility: "visible",
              maxWidth: "100vw",
            }}
            className="FBIframe d-none d-sm-block"
          ></iframe>
          <div className="w-100 d-block d-sm-none">
            <a
              href={`https://www.facebook.com/fizjoterapianogawica/`}
              className="ContactLine text-body text-decoration-none"
            >
              <div className="IconStyle">
                <i className="bi bi-facebook h1"></i>
              </div>
              <div className="align-self-center">
                <h3 className="fw-normal text-start">
                  Fizjoterapia i Rehabilitacja Katarzyna Nogawica
                </h3>
              </div>
            </a>
          </div>
        </Col>
        <Col md={12} xl={6} className="d-flex flex-column gap-4">
          <Title refer={priceRefer}>Cennik</Title>
          <div className="d-flex flex-column gap-5 justify-content-center h-100">
            <div className="d-flex flex-row align-items-center gap-4">
              <i className="bi bi-shop h1"></i>
              <h3 className="fw-normal">
                Wizyta w gabinecie (45-60 min)- 100 zł
              </h3>
            </div>
            <div className="d-flex flex-row align-items-center gap-4">
              <i className="bi bi-house-door h1"></i>
              <div>
                <h3 className="fw-normal">Wizyta domowa (45 min) - 120 zł</h3>
                <h5 className="fw-normal">+ ewentualny koszt dojazdu</h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Facebook
