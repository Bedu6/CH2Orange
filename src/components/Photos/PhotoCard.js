import React from 'react';
import { Col, Card, CardTitle } from 'react-materialize';

const PhotoCard = (props) => (
    <div>
        <Col key = { props.index } s = { 12 } l = { 4 }>
            <Card
                horizontal
                header = {
                    <CardTitle image = { props.url } />
                }
            >
                <p>{ props.title }</p>
            </Card>
        </Col>
    </div>
);

export default PhotoCard;