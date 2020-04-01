import { Component, OnInit, Input } from '@angular/core';
import LisaEvent from './../../../../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: LisaEvent;
  img_selected: string
  constructor() { }

  ngOnInit(): void {
    this.getImgByProfession(this.event.service.profession_name);
  }
  getImgByProfession(profession: string) {
    var baner_root_folder = '/assets/app/media/img/baner/';
    var folder_names = [
      { name: 'blowout', img_count: 2 },
      { name: 'brow', img_count: 6 },
      { name: 'haircut', img_count: 1 },
      { name: 'makeup', img_count: 4 },
      { name: 'massage', img_count: 7 },
      { name: 'nails', img_count: 3 },
      { name: 'wellness', img_count: 2 }
    ];

    var folder = this.professionToFolderName(profession).toLowerCase();

    var folderSelected;
    for (let index = 0; index < folder_names.length; index++) {
      const element = folder_names[index];
      if (element.name == folder) {
        folderSelected = element;
      }
    }

    var random_image_number = Math.floor(Math.random() * folderSelected.img_count) + 1;
    var random_image_name;
    if (folderSelected.name != 'wellness' && folderSelected.name != 'hair' && folderSelected.name != 'haircut')
      random_image_name = folderSelected.name + '-' + random_image_number.toString() + '.jpg';
    else if (folderSelected.name == 'wellness') {
      random_image_name = 'yoga-' + random_image_number.toString() + '.jpg';
    }
    else if (folderSelected.name == 'hair' || folderSelected.name == 'haircut') {
      random_image_name = 'barber-' + random_image_number.toString() + '.jpg';
    }

    this.img_selected = baner_root_folder + folderSelected['name'] + '/' + random_image_name;
    console.log(this.img_selected);

  }
  professionToFolderName(profession: string): string {
    if (profession == "Barber")
      profession = 'haircut';
    else if (profession == 'Cosmetologist' || profession == 'Makeup Artist')
      profession = 'blowout';
    else if (profession == 'Esthetician')
      profession = 'makeup';
    else if (profession == 'Nail Technician')
      profession = 'nails';
    else if (profession == 'Massage Therapist')
      profession = 'massage';
    else if (profession == 'Wellness Instructor')
      profession = 'wellness';
    return profession;
  }
}
