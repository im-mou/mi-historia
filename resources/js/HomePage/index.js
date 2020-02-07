import React from "react";
import { Title, Row, Col, Card } from "antd";

import BigButtom from '../BigButton';

const HomePage = function() {
    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
            <Col span={6} offset={6}>

                    <BigButtom type="default" block={true}>
                        Quiero contar mi historia
                    </BigButtom>
            </Col>
            <Col span={6}>

                    <BigButtom type="default" block={true}>
                        Quiero responder a preguntas
                    </BigButtom>
            </Col>
        </Row>
    );
};

export default HomePage;
