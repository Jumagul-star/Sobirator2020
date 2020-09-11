import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col } from 'reactstrap'

function Sorts() {
    return (
        <div  style={{'backgroundImage': 'url(https://images.unsplash.com/photo-1560190366-4912b0511011?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)'}} className="pt-5 d-flex justify-content-center">
            <Col md={8}>
                <Card style={{marginTop: '110px', marginBottom: '110px'}} >
                    <CardBody>
                        <div className='page-content'>
                            <h1 className='page-title'>Виды вторичного сырья</h1>
                            <p>Вопрос вторичного использования большинства бытовых и промышленных отходов все чаще поднимается и в нашей стране. Это не может не радовать, так как количество отходов, которые ежедневно вывозятся на мусорные свалки, крайне негативно сказываются на состоянии окружающей среды.</p>
                            <p>Однако, для того чтобы внести свой вклад в улучшение экологии, необходимо понимать какие виды вторичного сырья есть, что подлежит <Link to='/recycle'>переработке</Link>, а что нет.</p>
                            
                            <h2>Что представляет из себя вторичное сырье</h2>
                            <p>Под вторичным сырьем понимают изделия или материалы, которые после того как были использованы, могут использоваться еще раз после определенных операций по переработке или обработки.</p>
                            <div class="card-group">
                            <div class="card">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80" alt='здесь было фото'/>
                                <div class="card-body">
                                    <h5 class="card-title">Макулатура</h5>
                                    <p class="card-text">включает в себя: бумагу, картон, газетные и журнальные материалы</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="https://images.unsplash.com/photo-1520185925492-cfafae0693a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt='здесь было фото'/>
                                    <div class="card-body">
                                    <h5 class="card-title">Стекло</h5>
                                    <p class="card-text">в эту категорию входят как стеклотара так и бой стекла</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="https://images.unsplash.com/photo-1580691746056-4badd831b86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80" alt='здесь было фото'/>
                                    <div class="card-body">
                                    <h5 class="card-title">Электроника</h5>
                                    <p class="card-text">к этой категории можно отнести различные платы, аккумуляторы, провода и т.д.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <img class="card-img-top" src="https://images.unsplash.com/photo-1571727153934-b9e0059b7ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt='здесь было фото'/>
                                    <div class="card-body">
                                    <h5 class="card-title">Пластик</h5>
                                    <p class="card-text">
                                        в данной категории очень много разновидностей пластика, которые отличаются различной маркировкой:
                                    </p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </div>
    )
}

export default Sorts
