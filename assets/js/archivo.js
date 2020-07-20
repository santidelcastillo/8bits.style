// CAROUSEL INDEX//
$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 10000
    })
    $('.fdi-Carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
});

// CONTACTO//
$('#contact-form').bootstrapValidator({
    //        live: 'disabled',
    message: 'This value is not valid',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        Name: {
            validators: {
                notEmpty: {
                    message: 'The Name is required and cannot be empty'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email address is required'
                },
                emailAddress: {
                    message: 'The email address is not valid'
                }
            }
        },
        Message: {
            validators: {
                notEmpty: {
                    message: 'The Message is required and cannot be empty'
                }
            }
        }
    }
});

// LIFESTYLE//
$(document).ready(function() {
    $('#list').click(function() {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
    });
    $('#grid').click(function() {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
    });
});

// CONTACTO PREG FRECUENTE//
/*
Author       : Theme_ocean.
Template Name: Fury - Product Landing Page
Version      : 1.0
*/
(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        $('a.page-scroll').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

    });


})(jQuery);