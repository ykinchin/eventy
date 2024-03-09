import { Flex, Input, List, Pagination, Select } from 'antd';
import { useState } from 'react';
import InputSearch from '../../../../components/shared/inputSearch/InputSearch';
import EventItem from '../eventItem/EventItem';
import s from './eventList.module.scss';

const EventList = () => {

    return (
        <>
            ) : (
                <Flex vertical justify="space-between" className={s.wrapper}>
                    <Flex justify="center" vertical gap={40}>
                        <Flex gap={20}>
                            <Select
                                style={{ width: 130 }}
                                ]}
                            />
                        </Flex>
                        <List
                            style={{ height: '70vh', overflow: 'auto' }}
                        />
                    </Flex>
                    <Flex justify="center">
                        <Pagination
                            showSizeChanger={false}
                            hideOnSinglePage={true}
                        />
                    </Flex>
                </Flex>
            )}
        </>
    );
};

export default EventList;
