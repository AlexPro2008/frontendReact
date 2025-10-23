import React, {useEffect} from "react";
import { load } from '@2gis/mapgl';
import {MapWrapper} from "./maxWrapper";
import {MapContext} from "../context";

export const Map = () => {
    const [_, setMapInstance] = React.useContext(MapContext);

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [39.628128, 47.254342],
                zoom: 13,
                key: '40f103c4-8ec4-4d1e-87c0-921370795038',
            });

            // Сохраняем ссылку на карту
            setMapInstance(map);
        });

        // Удаляем карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);

    return (
        <div className="mt-2 mb-2" style={{ width: '135%', height: '140%' }}>
            <MapWrapper />
        </div>
    );
};