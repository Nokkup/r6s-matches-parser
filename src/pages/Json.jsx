import React, { useContext  } from "react";
import { Row, Input, Col, Form, Button } from "antd";
import MatchListContext from "../context/MatchListContext";

const Json = () => {
    const matchList = useContext(MatchListContext);
    const json = JSON.stringify(matchList, null, 4);

    return (
        <Row justify="center" align="middle">
            <Col span={14} offset={1}>
                <Form
                    layout="vertical"
                    fields={[
                        {
                            name: ["textarea-json"],
                            value: json,
                        },
                    ]}
                >
                    <Form.Item name="textarea-json" label="JSON">
                        <Input.TextArea
                            placeholder=""
                            autoSize={{ minRows: 10, maxRows: 20 }}
                            readOnly={false}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="button"
                            onClick={() => navigator.clipboard.writeText(json)}
                        >
                            Copy
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Json;
