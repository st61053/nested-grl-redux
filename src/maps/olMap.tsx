
import React, { createRef, ReactElement } from 'react';
import OLMap from 'ol/Map';
import * as olInteraction from 'ol/interaction';
import * as olControl from 'ol/control';
import * as Proj from 'ol/proj';
import ol, { Feature, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

interface IMapProps {
  style: object;
  children?: ReactElement[];
  view?: ReactElement;
  focusOnMount?: boolean;
  center?: [number, number];
  zoom?: number;
  onPointerMove?: (evt: ol.MapBrowserEvent<UIEvent>) => void;
  onSingleClick?: (evt: ol.MapBrowserEvent<UIEvent>) => void;
  onFeatureHover?: (feature: ol.Feature) => void;
  onFeatureClick?: (feature: ol.Feature, coordinate: number[]) => void;
}

interface IMapState {
  map: OLMap;
}

export default class Map extends React.Component<IMapProps, IMapState> {

  private map: OLMap;
  private target = createRef<HTMLDivElement>();

  public constructor(props: IMapProps) {
    super(props);
    this.map = new OLMap({
      interactions: olInteraction.defaults(),
      controls: olControl.defaults(),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: this.props.center? Proj.fromLonLat(this.props.center) : [0, 0],
        zoom: this.props.zoom? this.props.zoom : 2,
        extent: Proj.transformExtent([-180, -90, 180, 90], 'EPSG:4326', 'EPSG:3857')
      })
    });
    if (props.onSingleClick) {
      this.map.on('singleclick', props.onSingleClick);
    }
    if (props.onFeatureHover) {
      this.map.on('pointermove', this.onFeatureHover.bind(this))
    }
    if (props.onFeatureClick) {
      this.map.on('singleclick', this.onFeatureClick.bind(this))
    }
    if (props.onPointerMove) {
      this.map.on('pointermove', this.onPointerMove.bind(this))
    }
  }

  public componentDidMount() {
    this.map.setTarget(this.target.current);
    this.map.renderSync();
    if (this.props.focusOnMount) {
      this.focus();
    }
  }

  public componentWillUnmount() {
    this.map.setTarget(undefined)
  }

  public onFeatureHover(evt) {
    if (evt.dragging) {
      return;
    }
    let pixel = this.map.getEventPixel(evt.originalEvent);
    let feature = this.map.forEachFeatureAtPixel(pixel, x => x) as Feature;
    this.props.onFeatureHover(feature);
  }

  public onFeatureClick(evt) {
    let pixel = this.map.getEventPixel(evt.originalEvent);
    let feature = this.map.forEachFeatureAtPixel(pixel, x => x) as Feature;
    let lonLat = Proj.toLonLat(evt.coordinate)
    this.props.onFeatureClick(feature, lonLat)
  }

  public onPointerMove(evt) {
    if (evt.dragging) {
      return;
    }
    this.props.onPointerMove(evt);
  }

  public focus() {
    const viewport = this.map.getViewport();
    viewport.tabIndex = 0;
    viewport.focus();
  }

  public render() {
    return (
      <div style={this.props.style}>
        <div ref={this.target} style={{ width: '100%', height: '100%' }}/>
        <div>
          {this.props.children}
          {this.props.view}
        </div>
      </div>
    );
  }
}

