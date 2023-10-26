import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/DashboardAPIContainer.css';
import ChartPie from '../components/ChartPie';
import LineChart from './LineChart';

function DashboardAPIContainer() {

    const data1 = [
        { name: "Active APIs", value: 7 },
        { name: "Inactive APIs", value: 4 }
    ];

    const linedata = {
        labels: ["2016", "2017", "2018", "2019", "2020"],
        datasets: [
            {
                label: "Number of Requests per Day",
                data: [2, 6, 9, 7, 11],
                borderColor: "#007EA7",
                backgroundColor: "#F0FAF1",
                pointBorderColor: "#AAA",
                pointBackgroundColor: "#FEF1F1",
            },
        ],
    };



    return (
        <div className="row">
            <div className="col-md-4">
                <div className='api_container'>
                    <Container>
                        <Row>
                            <p className='api_container_title'> Active API</p>
                        </Row>
                        <Row>
                            <Col>
                                <ChartPie
                                    data={data1}
                                    colors={["#007EA7", "#D9D9D9"]}
                                    innerRadius={70}
                                    outerRadius={100}
                                />
                            </Col>

                            <Col className='api_value_text'>
                                <p>Number of Active API: <span className='bold-data'>{data1.find(item => item.name === "Active APIs").value}</span></p>
                                <p>Total number of API: <span className='bold-data'>{data1.reduce((total, item) => total + item.value, 0)}</span></p>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>


            <div className="col-md-4">
                <div className='api_container'>
                    <Container>
                        <Row>
                            <p className='api_container_title'> Down API</p>
                        </Row>
                        <Row>
                            {/* <Col>
                                <ChartPie
                                    data={data2}
                                    colors={["#007EA7", "#D9D9D9"]}
                                    innerRadius={70}
                                    outerRadius={100}
                                />
                            </Col>

                            <Col className='api_value_text'>
                                <p>Number of Down API: <span className='bold-data'>{data2.find(item => item.name === "Active APIs").value}</span></p>
                                <p>Total number of API: <span className='bold-data'>{data2.reduce((total, item) => total + item.value, 0)}</span></p>
                            </Col> */}

                            <LineChart data={linedata} />
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="col-md-4">
                <div className='api_container'>
                    <Container>
                        <Row>
                            <p className='api_container_title'> Down API</p>
                        </Row>
                        <Row>
                            {/* <Col>
                                <ChartPie
                                    data={data2}
                                    colors={["#007EA7", "#D9D9D9"]}
                                    innerRadius={70}
                                    outerRadius={100}
                                />
                            </Col>

                            <Col className='api_value_text'>
                                <p>Number of Down API: <span className='bold-data'>{data2.find(item => item.name === "Active APIs").value}</span></p>
                                <p>Total number of API: <span className='bold-data'>{data2.reduce((total, item) => total + item.value, 0)}</span></p>
                            </Col> */}

                            <LineChart data={linedata} />
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default DashboardAPIContainer;