      // Enter loading state
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
      const submitText = submitBtn.querySelector('.btn-text');
      const originalText = submitText ? submitText.textContent : 'Send Message';
      if (submitText) {
        submitText.textContent = 'Sending...';
      }
      // Simulate network request
      setTimeout(() => {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        if (submitText) {
          submitText.textContent = originalText;
        }
        // Show friendly success confirmation
        const senderName = nameInput.value.trim();
        showAlert(`Thank you, ${senderName}! Your message has been received. Our team will contact you shortly.`, 'success');
        // Reset form inputs & validation flags
        contactForm.reset();
        touchedFields.name = false;
        touchedFields.email = false;
        touchedFields.message = false;
        // Clear any previous error styling
        document.querySelectorAll('.form-group').forEach((grp) => grp.classList.remove('has-error'));
        document.querySelectorAll('.error-text').forEach((err) => (err.textContent = ''));
        // Automatically hide alert after 8 seconds
        setTimeout(() => {
          hideAlert();
        }, 8000);
      }, 900);
    });
  }
});
