$(function() {
    $("#jqueryBtn").on("click", function() {
      alert("Bu jQuery tarafından çalıştırıldı!");
    });

    //COPY PHONE NUMBER
    $('#copyButton').click(function () {
      const textToCopy = $('.copied-text').text();
      const tempInput = $('<input>');
      $('body').append(tempInput);
      tempInput.val(textToCopy).select();
      document.execCommand('copy');
      tempInput.remove();
      alert('Phone number copied to clipboard!');
    });

  });