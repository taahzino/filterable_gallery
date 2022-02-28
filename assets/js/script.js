/**
 * Project: Demo Project
 * Author: Tahsin Ahmed Tushar
 * Date: Mon, Feb 28, 2022
 * Github: https://github.com/tushariar/
 */

const listItems = document.querySelectorAll('.listItem');
const galleryItems = document.querySelectorAll('.gallery_item');

listItems.forEach((item) => {
    item.addEventListener('click', () => {
        listItems.forEach((item2) => {
            item2.classList.remove('active');
        });

        item.classList.add('active');

        const dataFilter = item.getAttribute('data-filter');

        if (dataFilter != 'all') {
            galleryItems.forEach((galleryItem) => {
                const dataItem = galleryItem.getAttribute('data-item');
                if (dataItem != dataFilter) {
                    galleryItem.classList.add('hide');
                } else {
                    galleryItem.classList.remove('hide');
                }
            });
        } else {
            galleryItems.forEach((galleryItem) => {
                galleryItem.classList.remove('hide');
            });
        }
    })
})