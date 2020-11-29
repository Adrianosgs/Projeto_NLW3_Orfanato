import orphanage from '../models/Orphanage';
import imagesView from './images_view';

export default {
  render(orphanage: orphanage) {
    return{
  id: orphanage.id,
  name: orphanage.name,
  latitude: orphanage.latitude,
  longitude: orphanage.longitude,
  about: orphanage.about,
  instructions: orphanage.instructions,
  opening_hours: orphanage.opening_hours,
  open_on_weekends: orphanage.open_on_weekends,
  images: imagesView.renderMany(orphanage.images)
    };
  },
  renderMany(orphanage: orphanage[]) {
    return orphanage.map(orphanage => this.render(orphanage));
  }
}; 